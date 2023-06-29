import { Module } from '@nestjs/common';
import { BankAccountsService } from './services/bank-accounts.service';
import { BankAccountsController } from './bank-accounts.controller';
import { ValidateBankAccountOwnewshipService } from './services/validateBankAccountOwnership.service';

@Module({
  controllers: [BankAccountsController],
  providers: [BankAccountsService, ValidateBankAccountOwnewshipService],
  exports: [ValidateBankAccountOwnewshipService],
})
export class BankAccountsModule {}
