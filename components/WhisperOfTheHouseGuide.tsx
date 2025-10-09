import React from 'react';

export default function WhisperOfTheHouseGuide() {
  // 定义链接的目标地址，这里使用占位符，你需要替换为实际的路由路径
  const links = {
    guides: '/guides',
    collection: '/collection',
    abnormalPoints: '/abnormal-points-collection',
    // downloadsNews: '/downloads-news', // 暂时不需要链接到这个页面
  };

  return (
    <div className="space-y-16">
      {/* 游戏机制和评分系统 */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Gameplay Mechanics and Scoring System</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Definition of "Organization Completion" and Time Constraints</h3>
            <p className="text-gray-700">
              In Whisper of the House, achieving "Organization Completion" means that all items within a room are placed correctly according to the client's instructions. The client often has specific preferences regarding the layout, item placement, and even the orientation of items. If all these criteria are met, the task is considered "Tidy Complete."
            </p>
            <p className="text-gray-700 mt-3">
              Certain tasks come with time constraints, which means you need to complete them within a specific timeframe. If you exceed the time limit, your rewards will be reduced, so managing time efficiently is a key aspect of maximizing your score.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-green-900 mb-3">How Perfection and Item Placement Affect Final Rewards</h3>
            <p className="text-gray-700">
              The game rewards perfection, meaning that the better you organize and place items, the higher your final score. Precision is key—misplacing an item, even by a small margin, can result in deductions from your score. On top of correct placement, meeting the client's requirements—such as room aesthetics or specific item arrangements—will further boost your rewards. For a **<a href={links.guides} className="text-blue-600 hover:text-blue-800 font-bold underline">detailed breakdown of the scoring formula</a>**, be sure to check our Guides section. {/* 💥 LINK ADDED HERE 💥 */}
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl font-semibold text-red-900 mb-3">Penalty and Failure Conditions</h3>
            <p className="text-gray-700">
              Breaking items, placing them in the wrong location, or exceeding time limits are the primary conditions that result in penalties. Broken items reduce your score, and in some cases, cause you to lose rewards entirely. Likewise, failing to meet the client's organization request or taking too long to finish the task will lead to deductions in your final rewards.
            </p>
          </div>
        </div>
      </section>

      {/* 高效清洁策略 */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Efficient Cleaning and Organization Strategies</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-900 mb-3">Best Practices for Categorizing and Sequencing Items</h3>
            <p className="text-gray-700">
              Efficient organization begins with categorizing items into logical groups—such as books, kitchen items, or decor. Starting with large items first allows you to establish a clear layout of the room, which makes it easier to arrange smaller items around them.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-semibold text-orange-900 mb-3">Use of Specialized Cleaning Tools</h3>
            <p className="text-gray-700">
              Whisper of the House features specialized cleaning tools, such as the vacuum and mop, that help speed up the cleaning process. The vacuum works best for cleaning carpets and rugs, while the mop is ideal for sweeping through hard floors.
            </p>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
          <h3 className="text-xl font-semibold text-indigo-900 mb-3">Optimizing Movement Paths for Maximum Efficiency</h3>
          <p className="text-gray-700">
            Planning your movement path can save you a lot of time and prevent unnecessary backtracking. Always aim to start from one corner of the room and work your way systematically to the other side. This ensures that you don't waste time retracing your steps.
          </p>
          <p className="text-gray-700 mt-4">
             {/* 💥 LINK ADDED HERE 💥 */}
            <strong><a href={links.guides} className="text-blue-600 hover:text-blue-800 font-bold underline">Looking for the optimal cleaning paths and specific tool usage for different room types? Visit our full Guides page $\rightarrow$</a></strong>
          </p>
        </div>
      </section>

      {/* 奖励系统 */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Rewards System and Usage</h2>
        
        <div className="space-y-6">
          <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
            <h3 className="text-xl font-semibold text-teal-900 mb-3">Unlocking New Decor, Tools, Skins, and Town Areas</h3>
            <p className="text-gray-700">
               {/* 💥 LINKS ADDED HERE 💥 */}
              As you complete tasks successfully, you earn rewards such as vouchers and experience points. These can be used to unlock <a href={links.collection} className="text-blue-600 hover:text-blue-800 font-bold underline">new decorative items</a>, <a href={links.guides} className="text-blue-600 hover:text-blue-800 font-bold underline">upgrade cleaning tools</a>, character skins, and even new areas of the town. Unlocking new areas allows you to take on more complex and lucrative tasks.
            </p>
            <div className="mt-8 flex justify-center">
                <img 
                    src='/images/whisper-house-flower-shop-decor.jpg'
                    alt="A beautiful, detailed isometric view of a multi-level flower shop in Whisper of the House, showcasing various decorative plants and themed organization." 
                    className="w-full md:max-w-2xl rounded-lg shadow-lg" 
                    loading="lazy" // Add lazy loading for performance
                />
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
            <h3 className="text-xl font-semibold text-amber-900 mb-3">How Rewards Influence Gameplay Progression</h3>
            <p className="text-gray-700">
              Rewards play a crucial role in progressing through the game. By unlocking better tools, skins, and new areas, you gain access to more challenging tasks and richer story content. As you accumulate rewards and experience, you will find yourself tackling more complex missions.
            </p>
          </div>
        </div>
      </section>

      {/* 隐藏内容部分 */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Challenging Tasks and Story Missions</h2>
        
        <div className="space-y-6">
          <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-500">
            <h3 className="text-xl font-semibold text-pink-900 mb-3">Top 3 Most Intricate Tasks</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Luna's Apartment:</strong> A multi-room cleaning and organizing task that requires thorough attention to detail.</li>
              <li><strong>Alchemy Workshop:</strong> Organizing an alchemy workshop comes with unique challenges and fragile magical objects.</li>
              <li><strong>Fishie's Cabin:</strong> This task involves sorting various odd objects and arranging them into a cohesive space.</li>
            </ul>
          </div>

          <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-500">
            <h3 className="text-xl font-semibold text-rose-900 mb-3">Requirements for Unlocking Hidden Stories</h3>
            <p className="text-gray-700">
              To unlock hidden stories in Whisper of the House, you need to explore thoroughly and interact with specific items. Hidden clues often appear as you clean and organize, and completing special tasks will trigger these stories. For a complete walkthrough on how to uncover all deep lore and secret rooms, navigate to the **<a href={links.abnormalPoints} className="text-blue-600 hover:text-blue-800 font-bold underline">Abnormal Points Collection $\rightarrow$</a>** {/* 💥 LINK ADDED HERE 💥 */}
            </p>
            <div className="mt-8 flex justify-center">
                <img 
                    src='/images/whisper-house-halloween-cemetery-secret.jpg' 
                    alt="An isometric image of a spooky, detailed Halloween-themed cemetery level in Whisper of the House, featuring complex items, ghost characters, and hidden story elements." 
                    className="w-full md:max-w-2xl rounded-lg shadow-lg" 
                    loading="lazy" // Add lazy loading for performance
                />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 部分 */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Complete Customer and Task Lists Query</h3>
            <p className="text-gray-700">
              The game has a set of tasks and clients to complete before you can consider the game finished. After completing all client requests and unlocking all hidden content, you'll have reached the game's endpoint.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Efficient Ways to Farm Money and Rewards</h3>
            <p className="text-gray-700">
              To farm money and rewards effectively, focus on completing tasks that offer high rewards. Unlocking new areas with tougher missions will yield more significant payouts, helping you accumulate the resources needed to unlock more tools, skins, and other game content.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Existence of Hidden Easter Eggs and Secret Decorations</h3>
            <p className="text-gray-700">
              Yes, Whisper of the House has hidden Easter eggs and collectible decorations scattered throughout the game. These can be found by exploring rooms carefully, completing specific tasks, and interacting with seemingly ordinary items.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}