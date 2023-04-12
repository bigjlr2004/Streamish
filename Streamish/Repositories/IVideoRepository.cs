using Streamish.Models;
using System;
using System.Collections.Generic;

namespace Streamish.Repositories
{
    public interface IVideoRepository
    {
        void Add(Video video);
        void Delete(int id);
        List<Video> GetAll();
        List<Video> GetAllWithComments();
        public List<Video> Search(string criterion, bool sortDescending);
        public List<Video> Hottest(DateTime criterion);
        Video GetByIdWithComment(int id);
        Video GetById(int id);
        void Update(Video video);

    }
}