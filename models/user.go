package models

type User struct {
	ID       uint    `json:"id" gorm:"primaryKey;column:id"`
	Username string  `json:"username" gorm:"column:username" validate:"required,alphanumeric"`          // Fixed validation tag
	Password string  `json:"-" gorm:"column:password" validate:"required,min=6"`                        // Password should have a minimum length
	Email    string  `json:"email" gorm:"column:email" validate:"required,email"`                       // Email validation format
	Boards   []Board `json:"boards" gorm:"foreignKey:UserID;references:ID;constraint:OnDelete:CASCADE"` // No validation needed here unless you want to validate
}
