import { Component, ElementRef, ViewChild } from '@angular/core';
import { OwlOptions, CarouselModule } from 'ngx-owl-carousel-o';
import { NgFor, NgStyle, NgClass } from '@angular/common';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-home',
  imports: [NgbCarouselModule, NgFor, NgStyle, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  slides = [
    { id: 1, src: 'assets/image/home/banner1.jpg' },
    { id: 3, src: 'assets/image/home/banner2.jpg' },
    { id: 2, src: 'assets/image/home/banner3.jpg' },
  ];

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

  tinTuc = [
    {
      id: 1,
      src: 'assets/image/home/tintuc1.png',
      title: 'Thông báo điểm tuyệt đối tại kỳ thi tuyển sinh lớp 6 ở TP.HCM',
      content: 'Trường sẽ mang đến những lộ trình tài chính giáo dục có thể tiết kiệm đến 100% học phí, giúp học sinh Việt học trường quốc tế mà không mất bất kỳ.',
    },
    {
      id: 2,
      src: 'assets/image/home/tintuc2.png',
      title: 'TP.HCM thay đổi cách chấm điểm với bài thi Tiếng Anh có lỗi chính tả',
      content: 'Trường sẽ mang đến những lộ trình tài chính giáo dục có thể tiết kiệm đến 100% học phí, giúp học sinh Việt học trường quốc tế mà không mất bất kỳ',
    },
    {
      id: 3,
      src: 'assets/image/home/tintuc3.png',
      title: 'Lễ phát động ủng hộ đồng bào vùng bị thiên tai của học sinh Nguyễn Khuyến',
      content: 'Trường sẽ mang đến những lộ trình tài chính giáo dục có thể tiết kiệm đến 100% học phí...',
    },
    {
      id: 4,
      src: 'assets/image/home/tintuc4.png',
      title: 'Một ngày học tìm hiểu về An toàn giao thông và học luật khi tham gia giao thông',
      content: 'Trường sẽ mang đến những lộ trình tài chính giáo dục có thể tiết kiệm đến 100% học phí...',
    },
    {
      id: 5,
      src: 'assets/image/home/tintuc1.png',
      title: 'Học sinh đạt giải quốc gia được tuyên dương tại lễ chào cờ',
      content: 'Nhiều em học sinh xuất sắc được tuyên dương nhờ thành tích học tập nổi bật trong kỳ thi quốc gia...',
    },
    {
      id: 6,
      src: 'assets/image/home/tintuc2.png',
      title: 'Chương trình giao lưu thể thao giữa các trường THCS tại TP.HCM',
      content: 'Nâng cao thể chất, tăng cường giao lưu giữa học sinh các trường qua hoạt động thể thao...',
    },
    {
      id: 5,
      src: 'assets/image/home/tintuc1.png',
      title: 'Học sinh đạt giải quốc gia được tuyên dương tại lễ chào cờ',
      content: 'Nhiều em học sinh xuất sắc được tuyên dương nhờ thành tích học tập nổi bật trong kỳ thi quốc gia...',
    },
    {
      id: 6,
      src: 'assets/image/home/tintuc2.png',
      title: 'Chương trình giao lưu thể thao giữa các trường THCS tại TP.HCM',
      content: 'Nâng cao thể chất, tăng cường giao lưu giữa học sinh các trường qua hoạt động thể thao...',
    },
  ];



  currentIndex = 0;

  nextStudent() {
    this.currentIndex = (this.currentIndex + 1) % this.students.length;
    //  currentIndex = 2, students.length = 3 => (2 + 1) % 3 = 0
  }

  prevStudent() {
    this.currentIndex = (this.currentIndex - 1 + this.students.length) % this.students.length;
  }


  //Cuon đến phần đăng ký
  @ViewChild('formDangKy') componentDK: ElementRef | undefined;

  scrollToNKS() {
    const element = this.componentDK?.nativeElement;
    if (element) {
      // Tính toán vị trí cuộn với khoảng cách 112px phía trên
      window.scrollTo({
        // top: element.offsetTop - 112,  // Trừ đi 112px
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  currentPage = 0;
  itemsPerPage = 4;

  get totalPages(): number {
    return Math.ceil(this.tinTuc.length / this.itemsPerPage);
  }

  get currentItems() {
    const start = this.currentPage * this.itemsPerPage;
    return this.tinTuc.slice(start, start + this.itemsPerPage);
  }

  setPage(index: number) {
    this.currentPage = index;
  }


}
