package models

type Board struct {
	ID     uint   `gorm:"primaryKey;column:id" json:"id"`
	Title  string `gorm:"not null;column:title" json:"title"`
	UserID uint   `gorm:"column:user_id" json:"user_id"`
	User   User   `gorm:"foreignKey:UserID;references:ID" json:"user"`
	Lists  []List `gorm:"foreignKey:BoardID;references:ID" json:"lists"`
}
