import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewsComponent } from './components/news/news.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewsComponent],
  exports:[NewsComponent, CommonModule, FormsModule]
})
export class SharedModule { }
