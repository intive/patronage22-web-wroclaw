/*
  Warnings:

  - You are about to drop the column `linkn` on the `Presentation` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Presentation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "link" TEXT,
    "startTime" DATETIME,
    "currentTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "timer" DECIMAL NOT NULL,
    "type" TEXT NOT NULL
);
INSERT INTO "new_Presentation" ("createdAt", "currentTime", "description", "id", "startTime", "timer", "title", "type", "updatedAt") SELECT "createdAt", "currentTime", "description", "id", "startTime", "timer", "title", "type", "updatedAt" FROM "Presentation";
DROP TABLE "Presentation";
ALTER TABLE "new_Presentation" RENAME TO "Presentation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
