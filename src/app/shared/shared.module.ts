import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedNavComponent } from '../feed-nav/feed-nav.component';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainNavComponent, FeedNavComponent, NotFoundComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MainNavComponent,
    FeedNavComponent,
    NotFoundComponent,
    FontAwesomeModule,
  ],
})
export class SharedModule {}
