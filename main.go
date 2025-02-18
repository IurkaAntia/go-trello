package main

import (
	"Go-Project/database"
	"Go-Project/routes"
)

func main() {
	database.Connect()
	//migrations.Migrate()
	//seeders.Seed()

	r := routes.SetupRouter()
	r.Run(":8080")
}
