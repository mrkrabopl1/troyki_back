package db

import (
	"context"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

type PostgresStore struct {
	databaseUrl string
	dbx         *sqlx.DB
}

func NewPostgresStore(databaseUrl string) *PostgresStore {
	return &PostgresStore{
		databaseUrl: databaseUrl,
	}
}

const DriverName = "postgres"

func (s *PostgresStore) connect(ctx context.Context) (*sqlx.DB, error) {
	dbx, err := sqlx.ConnectContext(ctx, DriverName, s.databaseUrl)
	if err != nil {
		return nil, err
	}

	return dbx, nil
	// dbx, err := sqlx.Open(driverName, s.databaseUrl)

	// fmt.Println(s.databaseUrl)
	// //dbx, err := sqlx.ConnectContext(ctx, driverName, s.databaseUrl)
	// if err != nil {
	// 	fmt.Println()
	// 	return err
	// }

	// s.dbx = dbx
	// return nil
}

func (s *PostgresStore) close() error {
	return s.dbx.Close()
}
