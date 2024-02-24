/*
  Warnings:

  - You are about to drop the column `genre` on the `manga` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `manga` DROP FOREIGN KEY `Manga_genre_fkey`;

-- AlterTable
ALTER TABLE `manga` DROP COLUMN `genre`;

-- CreateTable
CREATE TABLE `Manga_Genre` (
    `mangaId` INTEGER NOT NULL,
    `GenreId` INTEGER NOT NULL,

    UNIQUE INDEX `Manga_Genre_GenreId_mangaId_key`(`GenreId`, `mangaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Manga_Genre` ADD CONSTRAINT `Manga_Genre_mangaId_fkey` FOREIGN KEY (`mangaId`) REFERENCES `Manga`(`idManga`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Manga_Genre` ADD CONSTRAINT `Manga_Genre_GenreId_fkey` FOREIGN KEY (`GenreId`) REFERENCES `Genre`(`idGenre`) ON DELETE RESTRICT ON UPDATE CASCADE;
