-- CreateTable
CREATE TABLE "Presentation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "Question" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "startTime" DATETIME,
    "currentTime" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "maxAnswerTime" INTEGER NOT NULL,
    "presentationId" INTEGER NOT NULL,
    CONSTRAINT "Question_presentationId_fkey" FOREIGN KEY ("presentationId") REFERENCES "Presentation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "uuid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "questionId" INTEGER,
    "counter" INTEGER,
    CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Presentation_uuid_key" ON "Presentation"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Question_uuid_key" ON "Question"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "Answer_uuid_key" ON "Answer"("uuid");
