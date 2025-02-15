package controllers

import (
	"Go-Project/database"
	"Go-Project/models"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetBoards(c *gin.Context) {
	var boards []models.Board

	// Fetch boards along with associated lists and cards
	if err := database.DB.Preload("Lists.Cards").Find(&boards).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Return boards in lowercase JSON format
	c.JSON(http.StatusOK, boards)
}
