using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace EShop.Persistence.Migrations
{
    public partial class AddingOfferTableToDbAndUpdatingHeadingAndItemTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ArabicTitle",
                table: "WidgetItems",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "isVisible",
                table: "WidgetItems",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ArabicTitle",
                table: "WidgetHeadings",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Rows",
                table: "WidgetHeadings",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "isVisible",
                table: "WidgetHeadings",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "Offers",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ImageName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Offers", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Offers");

            migrationBuilder.DropColumn(
                name: "ArabicTitle",
                table: "WidgetItems");

            migrationBuilder.DropColumn(
                name: "isVisible",
                table: "WidgetItems");

            migrationBuilder.DropColumn(
                name: "ArabicTitle",
                table: "WidgetHeadings");

            migrationBuilder.DropColumn(
                name: "Rows",
                table: "WidgetHeadings");

            migrationBuilder.DropColumn(
                name: "isVisible",
                table: "WidgetHeadings");
        }
    }
}
