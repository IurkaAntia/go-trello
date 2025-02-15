package models

type Card struct {
	ID      uint   `gorm:"primaryKey;column:id" json:"id"`
	Title   string `gorm:"not null;column:title" json:"title"`
	Content string `gorm:"column:content" json:"content"`
	ListID  uint   `gorm:"column:list_id" json:"list_id"`
	List    List   `gorm:"foreignKey:ListID;references:ID" json:"list"`
}
