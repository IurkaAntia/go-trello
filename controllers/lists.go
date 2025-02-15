package controllers

import (
	"Go-Project/database"
	"Go-Project/models"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

func GetListsForBoard(c *gin.Context) {
	boardId := c.DefaultQuery("boardId", "0") // Get boardId from query parameters
	var lists []models.List
	if err := database.DB.Where("BoardID = ?", boardId).Find(&lists).Error; err != nil {
		c.JSON(500, gin.H{"error": "Error fetching lists"})
		return
	}
	c.JSON(200, lists)
}

func AddList(c *gin.Context) {
	var list models.List

	if err := c.ShouldBindJSON(&list); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := database.DB.Create(&list).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create list"})
		return
	}

	c.JSON(http.StatusOK, list)
}

// DeleteList handles deleting a list by ID
func DeleteList(c *gin.Context) {
	listID, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid list ID"})
		return
	}

	if err := database.DB.Delete(&models.List{}, listID).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete list"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "List deleted successfully"})
}
