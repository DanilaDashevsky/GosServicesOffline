using Microsoft.EntityFrameworkCore;

namespace GosServices.Models
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options):base(options)
        { 
        
        }

        public DbSet<Person> persons => Set<Person>();
    }
}
