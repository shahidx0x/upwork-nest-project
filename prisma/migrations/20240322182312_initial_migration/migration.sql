-- CreateTable
CREATE TABLE "user_installs" (
    "id" SERIAL NOT NULL,
    "paramName1" TEXT NOT NULL,
    "paramName2" TEXT NOT NULL,
    "paramName3" TEXT NOT NULL,
    "paramName4" TEXT NOT NULL,
    "paramName5" TEXT NOT NULL,
    "paramName6" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,

    CONSTRAINT "user_installs_pkey" PRIMARY KEY ("id")
);
