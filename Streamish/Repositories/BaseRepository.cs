using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
namespace Streamish.Repositories
{

    //Using the keyword abstract means that the Base Repository Class can not be directly instantiated, but can ONLY be used by inheritance.
    public abstract class BaseRepository
    {
        private readonly string _connectionString;
        public BaseRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        protected SqlConnection Connection
        { get
            {
                return new SqlConnection(_connectionString);
            }
        }
    } 
}
