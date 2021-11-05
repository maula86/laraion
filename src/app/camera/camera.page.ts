import { Component, OnInit } from '@angular/core';
// darkmode ThemeService
import { ThemeService } from '../services/theme.service';
// import Upload media
import { ActionSheetController, Platform } from '@ionic/angular';
import {
  MediaCapture,
  MediaFile,
  CaptureError
} from '@ionic-native/media-capture/ngx';
// import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
// import { AlertService } from 'src/app/services/alert.service';
// import { Button } from 'protractor';

const MEDIA_FOLDER_NAME = 'my_media';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  files = [];

  constructor(private themeService: ThemeService,
              // private imagePicker: ImagePicker,
              private mediaCapture: MediaCapture,
              private file: File,
              private media: Media,
              private streamingMedia: StreamingMedia,
              private photoViewer: PhotoViewer,
              private actionSheetController: ActionSheetController,
              // private alert: AlertService
              private plt: Platform,
              ) { }



      ngOnInit(): void {
        this.plt.ready().then(() => {
          let path = this.file.dataDirectory;
          this.file.checkDir(path, MEDIA_FOLDER_NAME).then(
            () => {
              this.loadFiles();
            },
            err => {
              this.file.createDir(path, MEDIA_FOLDER_NAME, false);
            }
          );
        });
      }

      loadFiles() {
        this.file.listDir(this.file.dataDirectory, MEDIA_FOLDER_NAME).then(
          res => {
            this.files = res;
          },
          err => console.log('error loading files: ', err)
        );
      }

      async selectMedia() {
        const actionSheet = await this.actionSheetController.create({
          header: 'Apa yang ingin Anda tambahkan?',
          buttons: [
            {
              text: 'Tangkap Gambar',
              handler: () => {
                this.captureImage();
              }
            },
            {
              text: 'Rekam Vidio',
              handler: () => {
                this.recordVideo();
              }
            },
            {
              text: 'Rekam Suara',
              handler: () => {
                this.recordAudio();
              }
            },
            // {
            //   text: 'Memilih File',
            //   handler: () => {
            //     this.pickImages();
            //   }
            // },
            {
              text: 'Cancel',
              role: 'cancel'
            }
          ]
        });
        await actionSheet.present();
      }

      // pickImages() {
      //   this.imagePicker.getPictures({}).then(
      //     results => {
      //       for (var i = 0; i < results.length; i++) {
      //         this.copyFileToLocalDir(results[i]);
      //       }
      //     }
      //   );

      //   // If you get problems on Android, try to ask for Permission first
      //   // this.imagePicker.requestReadPermission().then(result => {
      //   //   console.log('requestReadPermission: ', result);
      //   //   this.selectMultiple();
      //   // });
      // }

      captureImage() {
        this.mediaCapture.captureImage().then(
          (data: MediaFile[]) => {
            if (data.length > 0) {
              this.copyFileToLocalDir(data[0].fullPath);
            }
          },
          (err: CaptureError) => console.error(err)
        );
      }

      recordAudio() {
        this.mediaCapture.captureAudio().then(
          (data: MediaFile[]) => {
            if (data.length > 0) {
              this.copyFileToLocalDir(data[0].fullPath);
            }
          },
          (err: CaptureError) => console.error(err)
        );
      }

      recordVideo() {
        this.mediaCapture.captureVideo().then(
          (data: MediaFile[]) => {
            if (data.length > 0) {
              this.copyFileToLocalDir(data[0].fullPath);
            }
          },
          (err: CaptureError) => console.error(err)
        );
      }
      copyFileToLocalDir(fullPath) {
        let myPath = fullPath;
        // Make sure we copy from the right location
        if (fullPath.indexOf('file://') < 0) {
          myPath = 'file://' + fullPath;
        }

        const ext = myPath.split('.').pop();
        const d = Date.now();
        const newName = `${d}.${ext}`;

        const name = myPath.substr(myPath.lastIndexOf('/') + 1);
        const copyFrom = myPath.substr(0, myPath.lastIndexOf('/') + 1);
        const copyTo = this.file.dataDirectory + MEDIA_FOLDER_NAME;

        this.file.copyFile(copyFrom, name, copyTo, newName).then(
          success => {
            this.loadFiles();
          },
          error => {
            console.log('error: ', error);
          }
        );
      }

      openFile(f: FileEntry) {
        if (f.name.indexOf('.wav') > -1) {
          // We need to remove file:/// from the path for the audio plugin to work
          const path =  f.nativeURL.replace(/^file:\/\//, '');
          const audioFile: MediaObject = this.media.create(path);
          audioFile.play();
        } else if (f.name.indexOf('.MOV') > -1 || f.name.indexOf('.mp4') > -1) {
          // E.g: Use the Streaming Media plugin to play a video
          this.streamingMedia.playVideo(f.nativeURL);
        } else if (f.name.indexOf('.jpg') > -1) {
          // E.g: Use the Photoviewer to present an Image
          this.photoViewer.show(f.nativeURL, 'Keren Cak');
        }
      }

      // deleteFile(f: FileEntry) {
      //   const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
      //   this.file.removeFile(path, f.name).then((data) => {
      //     this.alert.alertYN('Data Akan di hapus',
      //                         'Tekan Iya untuk menghapus',
      //                         'Batal',
      //                         'Hapus');
                              
      //     // this.loadFiles();
      //   },
      //   err => console.log('error remove: ', err));
      // }
       deleteFile(f: FileEntry) {
        const path = f.nativeURL.substr(0, f.nativeURL.lastIndexOf('/') + 1);
        this.file.removeFile(path, f.name).then(() => {
          this.loadFiles();
        },
        err => console.log('error remove: ', err));
      }

      toggleDarkMode(){
    this.themeService.toggleAppTheme();
  }

}
