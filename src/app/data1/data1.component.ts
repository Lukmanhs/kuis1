import { Component, OnInit } from '@angular/core';
import { Mahasiswa } from '../shared/mahasiswa';

@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css']
})
export class Data1Component implements OnInit {
  nim = '';
  nama = '';
  kelas = '';
  dftrMhs:Mahasiswa[] = [];
  mhs;

  constructor() { }

  ngOnInit() {
  }
  tambahMhs(){
    this.mhs = new Mahasiswa(this.nim,this.nama,this.kelas);
    this.dftrMhs.push(this.mhs);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }

}
