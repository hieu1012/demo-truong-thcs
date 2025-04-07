import { Component, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { NgFor, NgStyle } from '@angular/common';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  imports: [NgbCarouselModule, NgFor, NgStyle],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  slides = [
    { id: 1, src: 'assets/image/home/banner1.jpg' },
    { id: 3, src: 'assets/image/home/banner2.jpg' },
    { id: 2, src: 'assets/image/home/banner3.jpg' },
  ];

  currentIndex = 0; // Chỉ mục hiện tại

  students = [
    {
      id: 1,
      src: 'assets/image/home/avt1.jpg',
      name: 'Trương Anh Khoa',
      class: 'Học sinh lớp 9A1',
      quote: '"Các thầy cô tạo ra rất nhiều hoạt động, khiến giờ học rất vui và dễ hiểu"',
      description: 'Con thích học Toán nhất, bởi trong lớp các thầy cô tạo ra rất nhiều hoạt động, khiến giờ học rất vui và dễ hiểu. Con và các bạn cũng được tham gia nhiều dự án, ứng dụng các kiến thức đã được học vào thực tiễn đời sống.'
    },
    {
      id: 2,
      src: 'assets/image/home/avt2.jpg',
      name: 'Hà Anh Tuấn',
      class: 'Học sinh lớp 10A2',
      quote: '"Con thấy môi trường học ở đây rất thân thiện và cởi mở"',
      description: 'Các thầy cô luôn sẵn sàng lắng nghe, hỗ trợ chúng con. Con học được nhiều kỹ năng mềm qua các hoạt động ngoại khóa, câu lạc bộ trong trường.'
    },
    {
      id: 3,
      src: 'assets/image/home/avt3.jpg',
      name: 'Trương Thế Vinh',
      class: 'Học sinh lớp 9A3',
      quote: '"Con tự tin hơn rất nhiều khi học tại đây"',
      description: 'Từ khi học tại trường, con thấy bản thân trưởng thành hơn, mạnh dạn phát biểu và tự tin thuyết trình trước lớp.'
    }
  ];

  nextStudent() {
    this.currentIndex = (this.currentIndex + 1) % this.students.length;
    //  currentIndex = 2, students.length = 3 => (2 + 1) % 3 = 0
  }

  prevStudent() {
    this.currentIndex = (this.currentIndex - 1 + this.students.length) % this.students.length;
  }

  //Cuon den chan dung NKS
  @ViewChild('formDangKy') componentDK: ElementRef | undefined;

  // scrollToNKS() {
  //   this.chanDungNKS?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  // }

  scrollToNKS() {
    // Lấy phần tử cần cuộn tới
    const element = this.componentDK?.nativeElement;

    if (element) {
      // Tính toán vị trí cuộn với khoảng cách 112px phía trên
      window.scrollTo({
        top: element.offsetTop - 112,  // Trừ đi 112px
        behavior: 'smooth'
      });
    }
  }

}
