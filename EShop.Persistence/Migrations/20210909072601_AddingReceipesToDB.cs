using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EShop.Persistence.Migrations
{
    public partial class AddingReceipesToDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Receipes",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ProductId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CookingTime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Serves = table.Column<int>(type: "int", nullable: false),
                    Method = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ShowInNav = table.Column<bool>(type: "bit", nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Receipes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Receipes_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "ReceipeIngredients",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ReceipeId = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReceipeIngredients", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ReceipeIngredients_Receipes_ReceipeId",
                        column: x => x.ReceipeId,
                        principalTable: "Receipes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ReceipeIngredients_ReceipeId",
                table: "ReceipeIngredients",
                column: "ReceipeId");

            migrationBuilder.CreateIndex(
                name: "IX_Receipes_ProductId",
                table: "Receipes",
                column: "ProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ReceipeIngredients");

            migrationBuilder.DropTable(
                name: "Receipes");
        }
    }
}
