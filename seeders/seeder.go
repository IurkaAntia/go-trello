package seeders

import (
	"Go-Project/database"
	"Go-Project/models"
	"log"

	"golang.org/x/crypto/bcrypt"
)

// Seed seeds initial data into the database
func Seed() {
	// Hash the password before storing it
	passwordHash, err := bcrypt.GenerateFromPassword([]byte("password123"), bcrypt.DefaultCost)
	if err != nil {
		log.Fatal("Error hashing password:", err)
	}

	// Create a sample user
	user := models.User{
		Username: "john_doe",
		Email:    "john.doe@example.com",
		Password: string(passwordHash), // Store the hashed password
	}
	if err := database.DB.Create(&user).Error; err != nil {
		log.Fatal("Error seeding user:", err)
	}

	// Create a sample board for the user
	board := models.Board{
		Title:  "Sample Board",
		UserID: user.ID,
	}
	if err := database.DB.Create(&board).Error; err != nil {
		log.Fatal("Error seeding board:", err)
	}

	// Create a sample list for the board
	list := models.List{
		Title:   "To Do",
		BoardID: board.ID,
	}
	if err := database.DB.Create(&list).Error; err != nil {
		log.Fatal("Error seeding list:", err)
	}

	// Create sample cards for the list
	card1 := models.Card{
		Title:   "Finish documentation",
		Content: "Complete the user manual for the project.",
		ListID:  list.ID,
	}
	if err := database.DB.Create(&card1).Error; err != nil {
		log.Fatal("Error seeding card:", err)
	}

	card2 := models.Card{
		Title:   "Write tests",
		Content: "Write unit tests for the API endpoints.",
		ListID:  list.ID,
	}
	if err := database.DB.Create(&card2).Error; err != nil {
		log.Fatal("Error seeding card:", err)
	}

	log.Println("Database seeded successfully")
}
