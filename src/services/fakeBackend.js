function generateFileList(numOfInstances) {
  const list = [];
  for (let it = 0; it < numOfInstances; it++) {
    const date = new Date(Date.now());
    list.push({
      _id: it.toString(),
      filename: `test${it}.txt`,
      size: it,
      date: date.toDateString(),
      tags: ["tag1", "tag2"],
      notes: "Some note here",
    });
  }
  return list;
}

export function getFileList() {
  return generateFileList(27);
}
