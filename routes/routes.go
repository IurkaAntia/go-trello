package routes

import (
	"Go-Project/controllers"
	"github.com/gin-gonic/gin"
)

func SetupRouter() *gin.Engine {
	r := gin.Default()

	api := r.Group("/api")
	{
		api.GET("/users", controllers.GetUsers)
		api.POST("/users", controllers.CreateUser)
		api.GET("/boards", controllers.GetBoards)
		api.POST("/boards", controllers.AddList)
		api.DELETE("/boards/:id", controllers.DeleteList)
		//api.GET("/lists", controllers.GetLists)
		api.GET("/cards", controllers.GetCards)
		// In your Go backend
		api.GET("/lists", controllers.GetListsForBoard)

	}

	return r
}
