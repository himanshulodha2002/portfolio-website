import Link from "next/link";
import React from "react";

// You'll need to manually list the files since Next.js can't dynamically read directories in production
const mlLabFiles = [
  {
    name: "Blood Pressure Prediction",
    path: "/ml(lab)/Jugad-main/BP/",
    files: [
      {
        name: "BP.ipynb",
        path: "/ml(lab)/Jugad-main/BP/BP.ipynb",
        type: "notebook",
      },
    ],
  },
  {
    name: "Candidate Analysis",
    path: "/ml(lab)/Jugad-main/Candidate/",
    files: [
      {
        name: "Candidate.ipynb",
        path: "/ml(lab)/Jugad-main/Candidate/Candidate.ipynb",
        type: "notebook",
      },
      {
        name: "2.xls",
        path: "/ml(lab)/Jugad-main/Candidate/2.xls",
        type: "excel",
      },
    ],
  },
  {
    name: "Expectation Maximization",
    path: "/ml(lab)/Jugad-main/EM/",
    files: [
      {
        name: "em.ipynb",
        path: "/ml(lab)/Jugad-main/EM/em.ipynb",
        type: "notebook",
      },
    ],
  },
  {
    name: "ID3 Decision Tree",
    path: "/ml(lab)/Jugad-main/ID3/",
    files: [
      {
        name: "ID3_Algorithm.ipynb",
        path: "/ml(lab)/Jugad-main/ID3/ID3_Algorithm.ipynb",
        type: "notebook",
      },
      {
        name: "tennis.csv",
        path: "/ml(lab)/Jugad-main/ID3/tennis.csv",
        type: "csv",
      },
    ],
  },
  {
    name: "K-Nearest Neighbors",
    path: "/ml(lab)/Jugad-main/KNN/",
    files: [
      {
        name: "KNN.ipynb",
        path: "/ml(lab)/Jugad-main/KNN/KNN.ipynb",
        type: "notebook",
      },
    ],
  },
  {
    name: "Locally",
    path: "/ml(lab)/Jugad-main/Locally/",
    files: [
      // Add files from Locally folder - you'll need to check what's inside
      {
        name: "Files in Locally folder",
        path: "/ml(lab)/Jugad-main/Locally/",
        type: "folder",
      },
    ],
  },
  {
    name: "Naive Bayes",
    path: "/ml(lab)/Jugad-main/NaiveBayers/",
    files: [
      // Add files from NaiveBayers folder
      {
        name: "Files in NaiveBayers folder",
        path: "/ml(lab)/Jugad-main/NaiveBayers/",
        type: "folder",
      },
    ],
  },
  {
    name: "Random Forest",
    path: "/ml(lab)/Jugad-main/RandomForest/",
    files: [
      // Add files from RandomForest folder
      {
        name: "Files in RandomForest folder",
        path: "/ml(lab)/Jugad-main/RandomForest/",
        type: "folder",
      },
    ],
  },
  {
    name: "Support Vector Machine",
    path: "/ml(lab)/Jugad-main/SVM/",
    files: [
      // Add files from SVM folder
      {
        name: "Files in SVM folder",
        path: "/ml(lab)/Jugad-main/SVM/",
        type: "folder",
      },
    ],
  },
];

const getFileIcon = (type: string) => {
  switch (type) {
    case "notebook":
      return "📓";
    case "csv":
      return "📊";
    case "excel":
      return "📈";
    case "python":
      return "🐍";
    case "folder":
      return "📁";
    case "txt":
      return "📄";
    case "json":
      return "🗂️";
    default:
      return "📄";
  }
};

const getFileColor = (type: string) => {
  switch (type) {
    case "notebook":
      return "bg-blue-50 border-blue-200";
    case "csv":
      return "bg-green-50 border-green-200";
    case "excel":
      return "bg-emerald-50 border-emerald-200";
    case "python":
      return "bg-yellow-50 border-yellow-200";
    case "folder":
      return "bg-gray-50 border-gray-200";
    default:
      return "bg-gray-50 border-gray-200";
  }
};

export default function MLLabPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ML Lab Files Directory
          </h1>
          <p className="text-gray-600">
            Browse and download all machine learning lab files including
            notebooks, datasets, and other resources
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">
              📓 Jupyter Notebooks
            </span>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded">
              📊 CSV Files
            </span>
            <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded">
              📈 Excel Files
            </span>
            <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded">
              📁 Folders
            </span>
          </div>
        </div>

        <div className="space-y-6">
          {mlLabFiles.map((folder, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                📁 {folder.name}
              </h2>

              <div className="grid gap-3">
                {folder.files.map((file, fileIndex) => (
                  <div
                    key={fileIndex}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 hover:shadow-md transition-all ${getFileColor(
                      file.type
                    )}`}
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">{getFileIcon(file.type)}</span>
                      <div>
                        <p className="font-medium text-gray-900">{file.name}</p>
                        <p className="text-sm text-gray-500">{file.path}</p>
                        <span className="inline-block px-2 py-1 text-xs bg-white rounded-full border border-gray-300 mt-1">
                          {file.type.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      {file.type !== "folder" && (
                        <>
                          <a
                            href={file.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                          >
                            View
                          </a>
                          <a
                            href={file.path}
                            download={file.name}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm font-medium"
                          >
                            Download
                          </a>
                        </>
                      )}
                      {file.type === "folder" && (
                        <a
                          href={file.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors text-sm font-medium"
                        >
                          Browse Folder
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Need specific files?
          </h3>
          <p className="text-blue-800 mb-4">
            Some folders may contain additional files not listed above. You can
            browse individual folders or contact for specific file requests.
          </p>
          <div className="flex space-x-4">
            <Link
              href="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              ← Back to Portfolio
            </Link>
            <a
              href="/ml(lab)/Jugad-main/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Browse Root Folder
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
