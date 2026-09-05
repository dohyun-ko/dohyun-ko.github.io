const current = {
  organizations: [
    {
      name: "채널코퍼레이션",
      isImportant: true,
      color: "#5E56F0",
      url: "https://channel.io/",
      job: "Software Engineer",
      startedAt: "2025-01",
      projects: [
        {
          name: "ALF 개발",
          isImportant: true,
          startedAt: "2025-04",
          endedAt: "2026-06",
          description: "채널코퍼레이션의 AI 상담원 ALF(v2)를 개발했습니다.",
          whatIDid: [
            "에이전트의 Knowledge Base UI 개발",
            "에이전트 워크플로우 UI 개발",
            "KV 캐시 최적화로 비용 24% 감소",
          ],
        },
        {
          name: "CoS 개발",
          isImportant: true,
          startedAt: "2026-07",
          description:
            "고객 데이터 연동, 분석 및 업무를 자동화하는 에이전트 CoS를 개발합니다.",
          whatIDid: ["에이전트 시스템 서버 개발", "프롬프트 노이즈 개선"],
        },
      ],
    },
  ],
};

export default current;
