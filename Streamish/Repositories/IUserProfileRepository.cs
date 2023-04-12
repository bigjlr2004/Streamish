using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetAll();
        public UserProfile GetById(int id);
        public void Add(UserProfile user);
        public void Delete(int id);
        public void Update(UserProfile user);
        public UserProfile GetByIdWithVideos(int id);
    }
}