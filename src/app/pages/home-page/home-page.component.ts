import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/user';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  user: User;
  bitcoinRate: number = 0;
  data: Array<any>;
  subscription: Subscription

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscription = this.userService.getUser().subscribe(user => {
      if (!user) {
        this.gotoSignupPage()
      }
      this.user = user
    })
    this.loadBitcoinRate();
    this.loadChartData()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async loadChartData() {
    this.data = await this.bitcoinService.getConfirmedTransactions();

  }

  gotoSignupPage() {
    this.router.navigate([''])
  }

  async loadBitcoinRate() {
    this.bitcoinRate = await this.bitcoinService.getRate();
  }

}
