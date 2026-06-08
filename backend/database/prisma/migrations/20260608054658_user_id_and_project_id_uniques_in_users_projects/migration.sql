/*
  Warnings:

  - A unique constraint covering the columns `[user_id,project_id]` on the table `users_projects` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_projects_user_id_project_id_key" ON "users_projects"("user_id", "project_id");
