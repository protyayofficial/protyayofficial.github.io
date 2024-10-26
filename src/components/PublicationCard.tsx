import React from 'react';
import { Publication } from '../types/types';

const PublicationCard: React.FC<{ publication: Publication }> = ({ publication }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{publication.title}</h3>
          <p className="text-blue-400 mt-1">{publication.venue} • {publication.year}</p>
          <p className="text-gray-400 text-sm mt-2">
            {publication.authors.join(', ')}
          </p>
        </div>
        <p className="text-gray-300 text-sm text-justify">{publication.abstract}</p>

        {/* Display additional information */}
        {publication.status && (
          <p className="text-blue-400 text-sm">
            <strong className="text-gray-400 text-sm">Status:</strong> {publication.status}
          </p>
        )}
        <div className="flex flex-col space-y-1">
          {publication.preprint && (
            <a
              href={publication.preprint}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
            >
              Access the paper →
            </a>
          )}
          {publication.codeLink && (
            <a
              href={publication.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
            >
              View Code Repository →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
