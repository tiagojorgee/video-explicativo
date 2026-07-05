import React, { useEffect, useState } from 'react';
import { videoAPI, VideoStatusData } from '../services/api';
import { LoadingSpinner } from './LoadingSpinner';

interface VideoPreviewProps {
  jobId: string;
  onClose: () => void;
}

export const VideoPreview: React.FC<VideoPreviewProps> = ({ jobId, onClose }) => {
  const [status, setStatus] = useState<VideoStatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const data = await videoAPI.getStatus(jobId);
        setStatus(data);

        // Se ainda está processando, atualizar a cada 2 segundos
        if (data.status === 'processing') {
          setTimeout(fetchStatus, 2000);
        }
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao obter status');
        setLoading(false);
      }
    };

    fetchStatus();
  }, [jobId]);

  const handleDownload = async () => {
    try {
      const blob = await videoAPI.downloadVideo(jobId);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `video_${jobId}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao baixar vídeo');
    }
  };

  if (loading) {
    return <LoadingSpinner message="Obtendo status do vídeo..." />;
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (!status) {
    return null;
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-800">Pergunta:</h3>
            <p className="text-gray-600 mt-1">{status.question}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Status Badge */}
        <div className="py-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Status:</span>
            {status.status === 'processing' && (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  Processando...
                </span>
              </div>
            )}
            {status.status === 'completed' && (
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                ✓ Concluído
              </span>
            )}
            {status.status === 'error' && (
              <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                ✕ Erro
              </span>
            )}
          </div>
        </div>

        {/* Mensagem de erro se houver */}
        {status.error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{status.error}</p>
          </div>
        )}

        {/* Informações */}
        <div className="py-4 border-t border-gray-200 text-sm text-gray-600">
          <p>ID do trabalho: <code className="bg-gray-100 px-2 py-1 rounded">{jobId}</code></p>
          <p>Criado em: {new Date(status.created_at).toLocaleString('pt-BR')}</p>
        </div>

        {/* Botões de ação */}
        {status.status === 'completed' && status.video_url && (
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={handleDownload}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
            >
              📥 Baixar Vídeo
            </button>
          </div>
        )}

        {status.status === 'processing' && (
          <div className="pt-4 border-t border-gray-200">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full w-1/2 animate-pulse"></div>
            </div>
            <p className="text-center text-gray-600 text-sm mt-2">
              Por favor, não feche esta página. O vídeo está sendo gerado...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
