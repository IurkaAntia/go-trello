package migrations

import (
	"Go-Project/database"
	"Go-Project/models"
	"log"
)

// Migrate in database
func Migrate() {
	err := database.DB.AutoMigrate(
		&models.User{},
		&models.Board{},
		&models.List{},
		&models.Card{},
	)
	if err != nil {
		log.Fatal("Migration failed:", err)
	}
	log.Println("Database migrated successfully")
}
