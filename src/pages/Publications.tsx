import React from 'react';
import PublicationCard from '../components/PublicationCard';
import { Publication } from '../types/types';
import { Helmet } from 'react-helmet';

const Publications: React.FC<{ publications: Publication[] }> = ({ publications }) => {
  const sortedPublications = [...publications].sort((a, b) => b.year - a.year);

  return (
    <>
    <Helmet>
      <title>Publications</title>
    </Helmet>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-8">Publications</h2>

      {/* Conditional rendering for empty state */}
      {sortedPublications.length === 0 ? (
        <p className="text-gray-400">No publications available at the moment.</p>
      ) : (
        <div className="space-y-8">
          {sortedPublications.map((publication) => (
            <div key={publication.id} className="flex flex-col md:flex-row items-start justify-between gap-6">
              <div className="flex-1">
                <PublicationCard publication={publication} />
              </div>
              {publication.imageUrl && (
                <img
                  src={publication.imageUrl}
                  alt={publication.title}
                  className="w-96 h-auto object-cover rounded-lg self-center"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default Publications;
