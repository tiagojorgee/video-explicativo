import axios, { AxiosInstance } from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1';

export interface GenerateVideoRequest {
  question: string;
  language: string;
  style: string;
  duration_target: number;
}

export interface GenerateVideoResponse {
  id: string;
  status: string;
  question: string;
  created_at: string;
  estimated_duration: number;
}

export interface VideoStatusData {
  id: string;
  status: 'processing' | 'completed' | 'error';
  question: string;
  video_url?: string;
  created_at: string;
  error?: string;
}

class VideoAPI {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async generateVideo(data: GenerateVideoRequest): Promise<GenerateVideoResponse> {
    try {
      const response = await this.client.post('/videos/generate', data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async getStatus(jobId: string): Promise<VideoStatusData> {
    try {
      const response = await this.client.get(`/videos/status/${jobId}`);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async downloadVideo(jobId: string): Promise<Blob> {
    try {
      const response = await this.client.get(`/videos/download/${jobId}`, {
        responseType: 'blob',
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async listVideos(): Promise<any> {
    try {
      const response = await this.client.get('/videos/list');
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: any): Error {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.detail || error.message || 'Erro';
      return new Error(message);
    }
    return new Error('Erro desconhecido');
  }
}

export const videoAPI = new VideoAPI();
