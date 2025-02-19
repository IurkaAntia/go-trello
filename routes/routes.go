package routes

import (
	"Go-Project/controllers"
	"Go-Project/middlewares"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	// Enable CORS
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:5173"}, // Adjust to your frontend URL
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	// Authentication routes
	r.POST("/login", controllers.Login)
	r.POST("/register", controllers.Register)

	// Protected API routes
	api := r.Group("/api")
	api.Use(middlewares.AuthMiddleware())

	// User management
	api.GET("/users", controllers.GetUsers)
	api.GET("/me", controllers.GetMe)
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
