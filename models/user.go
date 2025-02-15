package models

type User struct {
	ID       uint    `json:"id" gorm:"primaryKey;column:id"`
	Username string  `json:"username" gorm:"column:username"`
	Password string  `json:"password" gorm:"column:password"`
	Email    string  `json:"email" gorm:"column:email"`
	Boards   []Board `json:"boards" gorm:"foreignKey:UserID;references:ID;constraint:OnDelete:CASCADE"`
}
