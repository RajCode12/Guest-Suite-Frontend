import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { SettingComponent } from './setting/setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RoomComponent } from './room/room.component';



@NgModule({
  declarations: [
    AdminHomeComponent,
    ManageUserComponent,
    ManageProductComponent,
    SettingComponent,
    SidebarComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    AdminHomeComponent,
    ManageUserComponent,
    ManageProductComponent,
    SettingComponent,
    SidebarComponent,
    RoomComponent
  ]
})
export class AdminModule { }
