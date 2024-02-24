-- CreateTable
CREATE TABLE `Bookmark` (
    `idMark` INTEGER NOT NULL AUTO_INCREMENT,
    `mangaId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`idMark`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chapter` (
    `idChapter` INTEGER NOT NULL AUTO_INCREMENT,
    `mangaId` INTEGER NOT NULL,
    `judulChapter` VARCHAR(255) NOT NULL,
    `chapter` INTEGER NOT NULL,
    `published_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `image` LONGTEXT NOT NULL,

    PRIMARY KEY (`idChapter`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `idGenre` INTEGER NOT NULL AUTO_INCREMENT,
    `genre` VARCHAR(144) NOT NULL,

    PRIMARY KEY (`idGenre`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Manga` (
    `idManga` INTEGER NOT NULL AUTO_INCREMENT,
    `mangaTitle` VARCHAR(255) NOT NULL,
    `cover` VARCHAR(144) NOT NULL,
    `deskripsi` LONGTEXT NOT NULL,
    `published_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `slug` VARCHAR(255) NOT NULL,
    `genre` INTEGER NOT NULL DEFAULT 4,

    PRIMARY KEY (`idManga`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(144) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` VARCHAR(191) NULL DEFAULT 'user',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Bookmark` ADD CONSTRAINT `Bookmark_mangaId_fkey` FOREIGN KEY (`mangaId`) REFERENCES `Manga`(`idManga`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Bookmark` ADD CONSTRAINT `Bookmark_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Chapter` ADD CONSTRAINT `Chapter_mangaId_fkey` FOREIGN KEY (`mangaId`) REFERENCES `Manga`(`idManga`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Manga` ADD CONSTRAINT `Manga_genre_fkey` FOREIGN KEY (`genre`) REFERENCES `Genre`(`idGenre`) ON DELETE RESTRICT ON UPDATE CASCADE;
