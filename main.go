package main

import (
	"Go-Project/database"
	"Go-Project/migrations"
	"Go-Project/routes"
	"Go-Project/seeders"
)

func main() {
	database.Connect()
	migrations.Migrate()
	seeders.Seed()

	r := routes.SetupRouter()
	r.Run(":8080")
}
