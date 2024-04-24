package main

import (
	"context"
	"fmt"

	"github.com/lib/pq"
	_ "github.com/lib/pq"
	"github.com/mrkrabopl1/go_db/config/config"
	"github.com/mrkrabopl1/go_db/db"
	"github.com/mrkrabopl1/go_db/server/router"
)

type Snickers struct {
	// Name       string
	Firm string
	Line []string
	// Image_path string
	// Id         int
	// Info       []byte
}

type Result struct {
	Firm        string         `db:"firm"`
	ArrayOfData pq.StringArray `db:"array_of_data"`
}

func main() {
	ctx := context.Background()

	cfg := config.LoadConfig()

	dbPath := fmt.Sprintf("host=%s port=%s user=%s password=%s dbname=%s sslmode=disable", cfg.PgHost, cfg.PgPort, cfg.PgUser, cfg.PgPass, cfg.PgBase)

	store := db.NewPostgresStore(dbPath)

	//	store.CreateTables(ctx)

	// store.UpdateTable(ctx)

	//store.GetTest(ctx)

	// data := db.JSONTransformToStruct()
	// store.FillTables(ctx, data)

	server := router.NewServer(cfg.HTTPServer, store)
	server.Start(ctx)

}
