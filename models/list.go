package models

type List struct {
	ID      uint   `gorm:"primaryKey;column:id" json:"id"`
	Title   string `gorm:"not null;column:title" json:"title"`
	BoardID uint   `gorm:"column:board_id" json:"board_id"`
	Board   Board  `gorm:"foreignKey:BoardID;references:ID" json:"board"`
	Cards   []Card `gorm:"foreignKey:ListID;references:ID" json:"cards"`
}
