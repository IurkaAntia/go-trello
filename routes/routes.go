package routes

import (
	"Go-Project/controllers"
	"Go-Project/middlewares"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	// Authentication routes
	r.POST("/login", controllers.Login)
	r.POST("/register", controllers.Register)

	// Protected API routes
	api := r.Group("/api")
	api.Use(middlewares.AuthMiddleware()) // Middleware applies to all routes inside `api`

	// User management
	api.GET("/users", controllers.GetUsers)
	api.POST("/users", controllers.CreateUser)

	// Board management
	api.GET("/boards", controllers.GetBoards)
	api.POST("/boards", controllers.AddList)
	api.DELETE("/boards/:id", controllers.DeleteList)

	// Lists & Cards
	api.GET("/lists", controllers.GetListsForBoard)
	api.GET("/cards", controllers.GetCards)

	return r
}
