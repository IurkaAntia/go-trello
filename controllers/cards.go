package controllers

import (
	"Go-Project/database"
	"Go-Project/models"
	"github.com/gin-gonic/gin"
	"net/http"
)

func GetCards(c *gin.Context) {
	var cards []models.Card
	database.DB.Find(&cards)
	c.JSON(http.StatusOK, cards)
}
