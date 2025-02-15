package database

import (
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// DB Global DB variable
var DB *gorm.DB

// Connect will establish the connection to MySQL and return the DB instance
func Connect() {
	// Load .env file
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	// Get the database connection info from environment variables
	dsn := os.Getenv("DB_USER") + ":" + os.Getenv("DB_PASSWORD") +
		"@tcp(" + os.Getenv("DB_HOST") + ":" + os.Getenv("DB_PORT") + ")/" +
		os.Getenv("DB_NAME") + "?charset=utf8mb4&parseTime=True&loc=Local"

	// Establish the database connection
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}
	log.Println("Connected to MySQL database")
}
