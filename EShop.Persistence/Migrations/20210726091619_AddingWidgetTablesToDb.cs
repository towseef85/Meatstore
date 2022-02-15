using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EShop.Persistence.Migrations
{
    public partial class AddingWidgetTablesToDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WidgetHeadings",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WidgetHeadings", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "WidgetItems",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RedirectTo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RedirectToId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WidgetId = table.Column<Guid>(type: "uniqueidentifier", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WidgetItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_WidgetItems_WidgetHeadings_WidgetId",
                        column: x => x.WidgetId,
                        principalTable: "WidgetHeadings",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_WidgetItems_WidgetId",
                table: "WidgetItems",
                column: "WidgetId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WidgetItems");

            migrationBuilder.DropTable(
                name: "WidgetHeadings");
        }
    }
}
