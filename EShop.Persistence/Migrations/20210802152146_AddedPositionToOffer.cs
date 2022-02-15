using Microsoft.EntityFrameworkCore.Migrations;

namespace EShop.Persistence.Migrations
{
    public partial class AddedPositionToOffer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Position",
                table: "Offers",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Position",
                table: "Offers");
        }
    }
}
