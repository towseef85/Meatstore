using Microsoft.EntityFrameworkCore.Migrations;

namespace EShop.Persistence.Migrations
{
    public partial class ChangingColumnNameToStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ShowInNav",
                table: "Receipes",
                newName: "Status");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Status",
                table: "Receipes",
                newName: "ShowInNav");
        }
    }
}
