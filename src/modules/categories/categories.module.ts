import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './services/categories.service';
import { ValidateCategoryOwnewshipService } from './services/validateCategoryOwnership.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, ValidateCategoryOwnewshipService],
  exports: [ValidateCategoryOwnewshipService],
})
export class CategoriesModule {}
