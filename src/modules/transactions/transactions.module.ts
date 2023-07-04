import { Module } from '@nestjs/common';
import { TransactionsController } from './transactions.controller';
import { BankAccountsModule } from '../bank-accounts/bank-accounts.module';
import { CategoriesModule } from '../categories/categories.module';
import { TransactionsService } from './services/transactions.service';
import { ValidateTransactionOwnewshipService } from './services/validateTransactionOwnership.service';

@Module({
  imports: [BankAccountsModule, CategoriesModule],
  controllers: [TransactionsController],
  providers: [TransactionsService, ValidateTransactionOwnewshipService],
})
export class TransactionsModule {}
