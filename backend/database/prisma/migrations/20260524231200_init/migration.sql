-- CreateEnum
CREATE TYPE "role_states" AS ENUM ('owner', 'admin', 'member');

-- CreateEnum
CREATE TYPE "type_cards" AS ENUM ('submiter', 'text');

-- CreateEnum
CREATE TYPE "user_status" AS ENUM ('pending', 'accepted', 'denied');

-- CreateEnum
CREATE TYPE "type_contents" AS ENUM ('text', 'checklist', 'image', 'code', 'link', 'file', 'quote', 'heading', 'divider');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "invite_code" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_friends" (
    "inviter_id" INTEGER NOT NULL,
    "receiver_id" INTEGER NOT NULL,
    "status" "user_status" NOT NULL DEFAULT 'pending',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_friends_pkey" PRIMARY KEY ("inviter_id","receiver_id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "owner_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_projects" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "role" "role_states" NOT NULL DEFAULT 'member',
    "exp" INTEGER NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards" (
    "id" SERIAL NOT NULL,
    "project_id" INTEGER NOT NULL,
    "type" "type_cards" NOT NULL DEFAULT 'text',
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cards_contents" (
    "id" SERIAL NOT NULL,
    "card_id" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "text" TEXT NOT NULL,
    "type" "type_contents" NOT NULL DEFAULT 'text',
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cards_contents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_cards_tasks" (
    "user_id" INTEGER NOT NULL,
    "card_id" INTEGER NOT NULL,

    CONSTRAINT "users_cards_tasks_pkey" PRIMARY KEY ("user_id","card_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_invite_code_key" ON "users"("invite_code");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "cards_contents_card_id_position_key" ON "cards_contents"("card_id", "position");

-- AddForeignKey
ALTER TABLE "users_friends" ADD CONSTRAINT "users_friends_inviter_id_fkey" FOREIGN KEY ("inviter_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_friends" ADD CONSTRAINT "users_friends_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_projects" ADD CONSTRAINT "users_projects_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_projects" ADD CONSTRAINT "users_projects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cards_contents" ADD CONSTRAINT "cards_contents_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_cards_tasks" ADD CONSTRAINT "users_cards_tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_cards_tasks" ADD CONSTRAINT "users_cards_tasks_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "cards"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
